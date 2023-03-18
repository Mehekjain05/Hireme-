data = {}
with open('C:\Vedant_\Projects\SmartHire\DATA\data.txt') as f:
    lines = f.readlines()
    i = 0
    while i < len(lines):
        key = lines[i].strip().replace('{', '')
        i += 1
        value = []
        while i < len(lines) and lines[i].strip() != '}':
            # value.append(lines[i].strip().split(','))
            # print(value)
            s=''.join((lines[i].strip()))
            # print(s)
            i += 1
        data[key] = s.split(',')
        i += 1

# print(data.keys())
# print(data)
# keywords=""
# keywords=data.values()
keywords = list(data.values())
# print(keywords)

txt=""
with open('C:\Vedant_\Projects\SmartHire\DATA\Data_Resume.txt') as f:
    lines = f.readlines()
    txt=txt.join(lines)
    # for i in range(len(keywords)):
# common_words = keywords.intersection(set(txt))
# print(type(txt))
txt2=''.join(keywords[0])
# print(type(txt2))
# print(keywords)
print(txt2)
common_words=(set(txt2)&set(txt))
# print(common_words)

print(txt)


