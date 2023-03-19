def SkillSet():
    data = {}
    with open('\DATA\data.txt') as f:
        lines = f.readlines()
        i = 0
        while i < len(lines):
            key = lines[i].strip().replace('{', '')
            i += 1
            value = []
            while i < len(lines) and lines[i].strip() != '}':
                s=''.join((lines[i].strip()))
                i += 1
            data[key] = s.split(',')
            i += 1
    keywords = list(data.values())
    txt=""
    with open('\DATA\Data_Resume.txt') as f:
        lines = f.readlines()
        txt=txt.join(lines)

    txt2=''.join(keywords[0])
    def common_words(string1, string2):
        words1 = string1.lower().split()
        words2 = string2.lower().split()
        set1 = set(words1)
        set2 = set(words2)
        common_set = set1.intersection(set2)
        common_list = list(common_set)

        return common_list


    com_words=common_words(txt, txt2)
    return com_words
SkillSet()