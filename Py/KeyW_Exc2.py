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
print(keywords)

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
# common_words=(set(txt2)&set(txt))
# print(common_words)

def common_words(string1, string2):
    # Split strings into lists of words
    words1 = string1.lower().split()
    words2 = string2.lower().split()

    # Create sets of unique words in each string
    set1 = set(words1)
    set2 = set(words2)

    # Find the intersection of the two sets
    common_set = set1.intersection(set2)

    # Convert the set back to a list
    common_list = list(common_set)

    return common_list


print(type(txt))
print(type(txt2))
com_words=common_words(txt, txt2) #RETURN VARIABLE
print("Common: \n",com_words)
# print(txt)


