import os
import json
import random
def main():
    file_list = os.listdir('src/assets/photogallery/photos/')
    random.shuffle(file_list)
    file_dict = {"file_list": file_list}
    json_obj = json.dumps(file_dict)
    with open("src/assets/photogallery/photos.json", "w") as ofile:
        ofile.write(json_obj)
main()