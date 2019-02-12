import matplotlib.pyplot as plt
import numpy as np

plt.bar([2015.7, 2016.7, 2017.7], [15, 14, 23], color='red', width=0.3, label='Komoka')
plt.bar([2016, 2017, 2018], [13, 14, 22], color='blue', width=0.3, label='Oxbow')
plt.bar([2016.3, 2017.3, 2018.3], [14, 22, 18], color='green', width=0.3, label='Dingman')
plt.xticks([2016, 2017, 2018])

plt.ylabel('Trout Caught')
plt.title('Trout Catches at Local Spots')

plt.legend()
plt.show()
