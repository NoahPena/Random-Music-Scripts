
var path = require('path'), fs=require('fs');
var shell = require('shelljs');

/* Replace these values with your paths and file extensions */
var midi_folder_path = 'E:\\MIDI\\';
var samples_folder_path = 'E:\\Samples\\';
var file_extension = '.mid';


function get_list_of_files(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);

    var list_of_files = [];

    for (var i = 0; i < files.length; i++)
    {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);

        if (stat.isDirectory()) {
            var temp_list = get_list_of_files(filename, filter);

            for (var j = 0; j < temp_list.length; j++)
            {
                list_of_files.push(temp_list[j]);
            }
        }
        else if (filename.indexOf(filter) >= 0) {
            console.log('-- found: ', filename);

            list_of_files.push(filename);
        };
    };

    return list_of_files;
};

function copy_over_midi_files(src_top_level_path, dest_top_level_path, file_type) {

    var list_of_files = get_list_of_files(src_top_level_path, file_type);

    console.log(list_of_files);

    for (var i = 0; i < list_of_files.length; i++)
    {
        var full_file_path = list_of_files[i];

        var file_only = full_file_path.substring(full_file_path.lastIndexOf('\\') + 1, full_file_path.lastIndexOf(file_type) + file_type.length);

        console.log('file_only: ', file_only);

        var create_file_path = full_file_path.substring(full_file_path.lastIndexOf('\\') + 1, full_file_path.lastIndexOf('\n')).replace(src_top_level_path, '');

        console.log('path: ', create_file_path);

        shell.mkdir('-p', dest_top_level_path + create_file_path);

        fs.copyFileSync(full_file_path, dest_top_level_path + create_file_path + file_only);
    }
}

copy_over_midi_files(samples_folder_path, midi_folder_path, file_extension);