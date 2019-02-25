
Over the course of a week in January, my peer Chris Brennan and I
were challenged to make a memory management system after analyzing
window's default allocations and its headers.
Over the course of a week, we designed and implemented a pure C
structure to manage a given slab of memory.

This description will not cover every aspect of the code, but rather
an overview of the system, the reasoning behind decisions, and my
conclusions. The project is not yet released, but when it is, this
project description will be updated with more pictures and a github link.

# Research

We analyzed window's default allocations and header information
via Visual Studio debugger in C code using malloc and free. We noticed
a good chunk of fields in the header seem to be memory that is unused,
and that the headers differed in size between 32 and 64-bit (x86 and x64
build environments respectively). Windows uses a doubly-linked list
by default, where each piece of allocated data has a header which
points to the previous and next piece of memory.

# Goals

Our challenge was "to write your own" system, so we decided on a couple
goals based on limited research. Our only restriction was we could
only use malloc to grab one large slab of memory from the CPU at the
beginning, and that free could be used at the end to return this slab
to the computer. The management of said slab had to be done internally
using some data structure(s) and only C code. Additionally, there
had to be a function to initialize the slab with our system,
a function to allocate some size of memory (malloc-equivalent),
and a function to de-allocate some memory (free-equivalent).

## Limit Fragmentation

Using malloc and free by default could cause excess memory fragmentation
if its not used carefully. Especially in games when memory is constantly
allocated and de-allocated on the fly. While there are algorithms out
there to optimize the speed and how often space must be allocated for
new objects, we wanted to focus on how we can limit fragmentation.
Our goal was not, however, to implement a defragmentation system. This
was out of scope and could be added to the system at a later time.

## Keep headers small

We knew that we would need some structure to keep track of memory
allocations in our give slab. This would require having some header
(a structure containing data) for each piece of allocated data.
Additionally, we would likely need a header for the block of memory as
a whole, depending on the type of data structure we would choose.

## Optimize Allocation

One limitation to this study is that we did not have a system capable
enough to measure the speed of allocation of malloc. We also did not
have the time to fully analyze how windows allocated memory
(where it put certain sizes given where and how much free space exists).
Given our findings that windows used a doubly-linked list, however,
we surmised that malloc must be looking through the linked list
one-by-one to find the first block of memory to allocate a requested
size. This operation is at worst O(n) in time, as the system would need
to look through every node until is found a suitable match. Even then,
the node found may not be the smallest one that fit a given requested
size. Using this information, we decided that we also wanted to optimize
the time it takes to find a free space, and the size of the node it
would find. After all, we can always buy more RAM, but we can't buy
more time.

## Terminology

### Functions

init - Our function to initialize the slab with our memory manager

alloc - Our malloc function

dealloc - Our free function

### General

block - some concurrent space in computer memory

slab - the block given to the memory manager

chunk - a block (in the slab) requested by alloc

### Headers

chunk header - the header applied to the slab to manage the entire block
(albeit a misnomer)

node header - the header used to manage a chunk

free/unallocated node - a node header which has been marked as
not being allocated, meaning it is not currently in use by the system.
After each alloc/dealloc function, all of these are guaranteed to exist
in the AVL tree

# Implementation

We decided on a two-prong approach to our challenge. First, each chunk
(or rather, its node header) needs to be aware of the chunks around it.
As such, properties of a doubly-linked list are required.
Secondly, to optimize searching for a free node and finding one with
the smallest possible size, we used an [AVL tree (self balancing binary
search tree)](https://en.wikipedia.org/wiki/AVL_tree).

Our chunk header keeps track of the total size of the slab
(excluding the size of the chunk header itself), and the root node of
the AVL tree.

## Allocation

Allocating memory from the slab requires a O(logn) search of the AVL
tree, which is organized by chunk size. This guarantees that a node
which is both large enough, and the smallest possible, is found.
Allocation will detract the requested size from the unallocated node,
inserting itself into the doubly-linked list, and updating the AVL tree
accordingly.

## Deallocation

Deallocating a chunk looks at the nodes around the deallocated chunk,
and will attempt to merge with any other unallocated nodes adjacent to
it. This helps limit fragmentation and storing larger chunks of memory.
Nodes are also updated in the AVL tree accordingly. This does require
various rotations and adjustments in the AVL tree though.

# Conclusions

I think we achieved a greater understanding of how memory works, but
as it stands, there is still much to be improved in this system.

## Goals

Fragmentation is impossible to avoid all together, but with the use
of merging nodes and finding the smallest possible node given a minimum
requested size, we were able to successfully limit fragmentation
to the best of our ability.

Admittedly, our node headers grew a bit more than we were hoping.
We were able to keep our chunk header at 8 bytes (x86) or 16 bytes (x64),
as it only contained the size of the slab (excluding itself), and a
pointer to the AVL tree's root node. I would love to re-examine
our work in the future and try to cut down on the size of the node header.
As it stands, any given node header is 25 bytes (x86) or 57 bytes (x64).
This includes the size of its block,
a flag for if it is allocated,
a pointer to the previous node in linear memory,
a pointer to the parent in the AVL tree,
a pointer to the left child in the AVL tree,
a pointer to the right child in the AVL tree,
and the height of the node in the AVL tree.
We did not need a pointer to the first node in the chunk header or
the next node in linear memory in the node header, as both can be
calculated using the size of the header,
and the size of a block that a node header is managing.
Size is also required for de-allocation, so it has multiple purposes.

Finally, optimization in time. I definitely think that we improved
this search, but I have no evidence to support that opinion. This
system definitely needs some testing and evidence to reveal how
practical it actually is in practice.

## Other

### Free nodes with chunk size 0

Near the end of the project, we realized that there is the potential
to create unallocated nodes with a block size of 0. This occurs if
the sum of a requested size and the size of a node header is equal to
the block size of an unallocated node in the AVL tree. This results
in a successful allocation, but with an unallocated node with the
block size of 0 in the AVL tree. We had not the time to find a better
solution, as the node has to exist if either adjacent chunk around it
is deallocated (again to reduce fragmentation). Should defragmentation
be added to the system, these nil nodes could be moved and absorbed,
allowing those 25-57 bytes to be retrieved by the system. For now,
however, they are a reality and limitation of the system.

### Code Organization

At the end of the week, the code was feature complete, bug free
(as far as the couple of unit tests we ran), and well documented.
Due to the fact that as a programmer, both of us are always learning,
the code has been changed after the fact to refactor the private/
internally used functions. 
~~Further code maintenance will be required
before it is able to be released to the public (aka added to my portfolio).~~
Hey, I added this project to a side-project called TemportalEngine.
You can check it out at the [github](https://github.com/temportalflux/TemportalEngine).
This project has files in the
[includes](https://github.com/temportalflux/TemportalEngine/blob/master/TemportalEngine/include/memory/MemoryManager.h)
and [source](https://github.com/temportalflux/TemportalEngine/blob/master/TemportalEngine/source/memory/MemoryManager.c).

### Slab size in framework

We also later found that our system couldn't handle huge sizes
from the framework we were using (animal3D), or the framework
wouldn't allocate the memory to give to the slab. Either way, it is a
curiosity which must be addressed before I will add the manager to
my portfolio.
