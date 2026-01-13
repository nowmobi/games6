#!/usr/bin/env python
import os

# 定义要删除的图片编号列表
image_numbers_to_delete = [
    194, 208, 229, 233, 238, 241, 251, 259, 260, 
    311, 313, 318, 327, 330, 336
]

# 获取当前目录下的所有文件
current_directory = os.path.dirname(os.path.abspath(__file__))
files = os.listdir(current_directory)

# 找到要删除的图片文件
deleted_count = 0
for num in image_numbers_to_delete:
    filename = f"{num}.jpg"
    
    # 检查文件是否存在
    if filename in files:
        filepath = os.path.join(current_directory, filename)
        
        # 删除文件
        try:
            os.remove(filepath)
            print(f"已删除文件: {filename}")
            deleted_count += 1
        except Exception as e:
            print(f"删除文件 {filename} 时出错: {str(e)}")
    else:
        print(f"文件不存在: {filename}")

print(f"\n总共删除了 {deleted_count} 个文件")

# 确认是否还有其他格式的图片文件（如.png, .jpeg等）
extensions = ['.png', '.jpeg', '.gif', '.bmp', '.tiff', '.webp']

for num in image_numbers_to_delete:
    for ext in extensions:
        filename = f"{num}{ext}"
        if filename in files:
            filepath = os.path.join(current_directory, filename)
            try:
                os.remove(filepath)
                print(f"已删除文件: {filename}")
                deleted_count += 1
            except Exception as e:
                print(f"删除文件 {filename} 时出错: {str(e)}")