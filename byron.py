import time

begin = time.time()
counter = 0
while time.time() - begin < 5:
    input()
    counter += 1
print(counter)
