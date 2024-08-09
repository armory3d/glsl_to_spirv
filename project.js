let project = new Project('glsl_to_spirv');

project.addDefine('KRAFIX_LIBRARY');
project.addFile('Sources/main.cpp');

project.addIncludeDir('glslang');
project.addFile('glslang/**');

return project;
