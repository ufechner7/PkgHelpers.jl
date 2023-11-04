# PkgHelpers

[![Build Status](https://github.com/ufechner7/PkgHelpers.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/ufechner7/PkgHelpers.jl/actions/workflows/CI.yml?query=branch%3Amain)

## Introduction
This package provides the function `freeze()` to freeze your Julia environment by adding
the current versions of your package environment to the `[compat]` section of your project.

## Installation

Add it to your global environment:  
```julia
using Pkg
Pkg.add("PkgHelpers")
```
Then change to the project you want to freeze:  
```
cd MyProject
julia --project
```
and on the Julia prompt type
```julia
using PkgHelpers
freeze()
```
This will overwrite your current `Project.toml`, so make sure you committed it to git before calling this function.