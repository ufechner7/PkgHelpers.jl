module PkgHelpers

# freeze the current package versions; overwrites the current Project.toml file
using Pkg, TOML

export freeze

"""
    freeze()

Freezes the current package versions by adding them to the Project.toml file.
"""
function freeze()
    project_file, compat = project_compat()
    deps = (TOML.parsefile(project_file))["deps"]
    open(project_file, "w") do io
        println(io, "[deps]")
        TOML.print(io, deps)
        println(io)
        println(io, "[compat]")
        TOML.print(io, compat)
    end
    nothing
end

"""
    project_compat()

Create a dictionary of package dependencies and their current versions.

Returns the full file name of the Project.toml file and the dictionary
`compat` that can be added to the Project.toml file to freeze the package
versions.
"""
function project_compat()
    io = IOBuffer();
    Pkg.status(; io)
    st = String(take!(io))
    i = 1
    project_file=""
    compat = Dict{String, Any}()
    for line in eachline(IOBuffer(st))
        if i == 1
            project_file=line
        else
            pkg_vers = split(line, "] ")[2]
            pkg  = split(pkg_vers, " v")[1]
            vers = split(pkg_vers, " v")[2]
            push!(compat, (String(pkg)=>String("~"*vers)))
        end
        i += 1
    end
    project_file = expanduser(split(project_file,'`')[2])
    project_file, compat
end


end
