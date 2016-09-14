import sys
import re

regex = re.compile(r'AA+|BB+')
def ocd_safe(ip):
    try:
        if ip == '' or ip == ' ':
            print 0
            return False

        all_list = regex.findall(ip)
        count = 0
        for s in all_list:
            count += len(s)-1
        print count
    except Exception as e:
        print 0

skipped_count = False
# for line in sys.stdin:
#     if skipped_count:
#         ocd_safe(line.strip())
#     else:
#         skipped_count = True

count = 10
# 2 3 7 2 7 7 5 5 5 6
input_str = [
"ABABBABAAB",
"BABAABBAAB",
"AAAABBAAAA",
"BABBABABBA",
"AABBBBAAAA",
"BAAAABBBBB",
"BBABAAAABB",
"BBBAAABBAB",
"BABAAABBBB",
"AAAABAABBB"
]


for line in input_str:
    ocd_safe(line)