module PkgHelpers

# freeze the current package versions; overwrites the current Project.toml file
using Pkg, TOML

export freeze

"""
    freeze()

Freezes the current package versions by adding them to the Project.toml file.
"""
function freeze()
    function printkv(io, dict, key)
        value = dict[key]
        println(io, "$key = \"", value, "\"")
    end
    project_file, compat = project_compat()
    if compat.count > 0
        dict = (TOML.parsefile(project_file))
        open(project_file, "w") do io
            println(io, "name = \"", dict["name"], "\"")
            println(io, "[deps]")
            TOML.print(io, dict["deps"])
            println(io)
            println(io, "[compat]")
            TOML.print(io, compat)
        end
    end
    println("Added $(compat.count) entries to the compat section!")
    nothing
end

"""
    project_compat()

Create a dictionary of package dependencies and their current versions.

Returns the full file name of the Project.toml file and the dictionary
`compat` that can be added to the Project.toml file to freeze the package
versions.
"""
function project_compat(prn=false)
    io = IOBuffer();
    Pkg.status(; io)
    st = String(take!(io))
    i = 1
    project_file=""
    compat = Dict{String, Any}()
    for line in eachline(IOBuffer(st))
        if prn; println(line); end
        if occursin(".toml", line)
            project_file=line
        elseif occursin("] ", line)
            pkg_vers = split(line, "] ")[2]
            if occursin(" v", pkg_vers)
                pkg  = split(pkg_vers, " v")[1]
                vers = split(pkg_vers, " v")[2]
                push!(compat, (String(pkg)=>String("~"*vers)))
            end
        end
        i += 1
    end
    project_file = expanduser(split(project_file,'`')[2])
    project_file, compat
end


end
