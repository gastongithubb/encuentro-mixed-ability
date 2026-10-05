from PIL import Image
import sys

def remove_black_background(input_path, output_path, threshold=50):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if the pixel is dark (black background)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == '__main__':
    remove_black_background(sys.argv[1], sys.argv[2])
