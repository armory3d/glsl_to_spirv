let project = new Project('krafix');

project.addDefine('SPIRV_CROSS_KRAFIX');
project.addDefine('KRAFIX_LIBRARY');
project.cpp11 = true;

project.addExclude('.git/**');
project.addExclude('glslang/.git/**');
project.addExclude('build/**');
project.addFile('Sources/**');

project.addFile('glslang/StandAlone/ResourceLimits.cpp');
project.addFile('glslang/glslang/GenericCodeGen/**');
project.addFile('glslang/glslang/MachineIndependent/**');
project.addFile('glslang/glslang/Include/**');
project.addFile('glslang/OGLCompilersDLL/**');
project.addFile('glslang/SPIRV/**');

project.addIncludeDir('glslang');
project.addIncludeDir('glslang/glslang');
project.addIncludeDir('glslang/glslang/MachineIndependent');
project.addIncludeDir('glslang/glslang/Include');
project.addIncludeDir('glslang/OGLCompilersDLL');

project.addFile('glslang/glslang/OSDependent/Unix/**');
project.addIncludeDir('glslang/glslang/OSDependent/Unix');

resolve(project);
