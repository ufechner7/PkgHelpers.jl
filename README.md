# PkgHelpers

[![Build Status](https://github.com/ufechner7/PkgHelpers.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/ufechner7/PkgHelpers.jl/actions/workflows/CI.yml?query=branch%3Amain)

## Introduction
This package provides the function `freeze()` to freeze your Julia environment by adding
the current versions of your package environment to the `[compat]` section of your project.  
If a `[compat]` section already exists it is overwritten without warning, so make a backup
of your `Project.toml` file first.

### Background
For reproducible research it is important to document the version of all packages you used to
achieve a result that you published in a paper. This package makes it easy to do this. Compared to committing the `Manifest.toml` this approach has the following advantages:

- the project stays compatible with different Julia versions;
- changes in the git log are readable (I find the Manifest.toml file unreadable, YMMV).

Freezing your package versions has one more advantage: It can avoid unwanted package updates
when adding new packages to your project.


## Installation

Add it to your global environment:  
```julia
using Pkg
Pkg.add("https://github.com/ufechner7/PkgHelpers.jl")
```
## Usage

Then change to the project you want to freeze:  
```bash
cd MyProject
julia --project
```
and on the Julia prompt type
```julia
using PkgHelpers, Pkg
freeze(Pkg; julia=juliaversion())
```
This will overwrite your current `Project.toml`, so make sure you committed it to git before calling this function.

If you tested your project with the Julia versions 1.9 and 1.10, use the call
```julia
freeze(Pkg; julia="~1.9, ~1.10")
```
You can also use ranges, e.g.
```julia
freeze(Pkg; julia="1.6 - 1.11")
```
If you use a range there must be a space around the hyphen.

More info about the version specifiers can be found [here](https://pkgdocs.julialang.org/v1/compatibility/).
