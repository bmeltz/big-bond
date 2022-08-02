import json
import os
import imghdr
#########################################
# Run this script to generate a json file of all file names in the photogallery dir
# python create_gallery_json.py
#########################################
# folder path
dir_path = "../src/assets/photogallery/"
temp = os.path.dirname(dir_path)
json_file = os.path.join(temp, "photos.json")
# list to store files
images = []
images_full_path = []

# Iterate directory
for file in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, file)):
        images.append(file)
        images_full_path.append(dir_path + file)
        print(imghdr.what(dir_path + file))
        print(dir_path, file)

with open(json_file, "w") as outfile:
    i = 0
    dict = {}
    for j in range(len(images)):
        # we only want jpeg's in this json
        if(imghdr.what(images_full_path[j]) == "jpeg"):
            dict[i] = images[j]
            i += 1
    json.dump(dict, outfile)
print("Images JSON:")
print(dict)
outfile.close()