
const fs = require('fs')

var VST2_path = '/Library/Audio/Plug-Ins/VST/'
var VST3_path = '/Library/Audio/Plug-Ins/VST3/'

var list_of_vst2_plugins = []
var list_of_vst3_plugins = []
// var list_of_vst2_plugins_not_in_vst3 = []

fs.readdir(VST3_path, (err, files) => {
    files.forEach(file => {
        list_of_vst3_plugins.push(file.split('.')[0]);
        // console.log(list_of_vst2_plugins);
        // console.log(file);
    })

    fs.readdir(VST2_path, (err, files) => {
        files.forEach(file2 => {
            if (!list_of_vst3_plugins.includes(file2.split('.')[0]))
            {
                console.log(file2.split('.')[0])
            }
            // list_of_vst3_plugins.push(file3.split('.')[0]);
            // console.log(file);'
            // console.log(list_of_vst2_plugins.filter(x => !list_of_vst3_plugins.includes(x)))
            // list_of_vst2_plugins.forEach(plugin => {
                // if (!list_of_vst3_plugins.includes(plugin))
                // {
                    // console.log(plugin);
                // }
            })
        })
    })
// })



// console.log(list_of_vst2_plugins)

// console.log(list_of_vst2_plugins.filter(x => !list_of_vst3_plugins.includes(x)))

// if (list_of_vst2_plugins.length > list_of_vst3_plugins.length)
// {
// list_of_vst2_plugins_not_in_vst3 = list_of_vst2_plugins.filter(x => !list_of_vst3_plugins.includes(x));
// }

// console.log(list_of_vst2_plugins_not_in_vst3);