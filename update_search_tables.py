import os

files = [
    '/home/consola2/WEB_CEDNAV/CEDNAV-main/sistema_simulacion.html',
    '/home/consola2/WEB_CEDNAV/CEDNAV-main/Noticias.html'
]

replacement = """					<tr>
						<td><a href="index.html#mision">Misión</a></td>
					</tr>
					<tr>
						<td><a href="index.html#vision">Visión</a></td>
					</tr>
					<tr>
						<td><a href="temporal.html"></a></td>
					</tr>"""

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Target content to replace
    target = """					<tr>
						<td><a href="temporal.html"></a></td>
					</tr>"""
    
    if target in content:
        new_content = content.replace(target, replacement)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"Target not found in {file_path}")
