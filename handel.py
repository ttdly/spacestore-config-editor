import os
import base64

# 设置包含图像文件的目录
image_directory = 'public\icon'

# 设置保存base64编码的文件的目录
output_directory = 'public\\base'

# 确保输出目录存在
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# 遍历目录中的所有文件
for filename in os.listdir(image_directory):
    # 检查文件扩展名，只处理图像文件
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')):
        # 构建图像文件的完整路径
        image_path = os.path.join(image_directory, filename)
        
        # 读取图像文件内容
        with open(image_path, 'rb') as image_file:
            # 将图像文件内容编码为base64字符串
            image_base64 = base64.b64encode(image_file.read()).decode('utf-8')
        
        # 构建输出文件的完整路径
        output_path = os.path.join(output_directory, f'{os.path.splitext(filename)[0]}.base64')
        
        # 将base64字符串写入文件
        with open(output_path, 'w') as output_file:
            output_file.write(image_base64)

print('所有图像文件已转换为base64编码。')
