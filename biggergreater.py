import sys
from itertools import permutations

def next_until_different(src,val,startIndex):
    i = startIndex+1
    s = len(src)
    found = False
    while i < s:
        if src[i] !=  val:
            found = True
            break
        i += 1

    return src[i] if found else None


def lexify(ip):
    try:
        sorted_ip = ''.join(sorted(ip))
        perm_list = [''.join(p) for p in permutations(sorted_ip)]
        current_idx = perm_list.index(ip)
        perm_list_len = len(perm_list)
        if current_idx == perm_list_len-1:
            print 'no answer'
        else:
            # next_greatest = next_until_different(perm_list,ip,current_idx)
            next_greatest = perm_list[current_idx+1]
            if next_greatest is not None:
                print next_greatest
            else:
                print 'no answer'

    except Exception as e:
        print 'no answer'

# skipped_count = False
# for line in sys.stdin:
#     if skipped_count:
#         lexify(line.strip())
#     else:
#         skipped_count = True

ip = [
# 'ab',
# 'bb',
# 'hefg',
# 'dhck',
# 'dkhc',
'kjsgfkjhglkjdsglkjslkhjslgekagiyqtitytielbm'
]

for line in ip:
    lexify(line.strip())