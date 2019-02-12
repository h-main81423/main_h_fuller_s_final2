import matplotlib.pyplot as plt 
import numpy as np 

plt.bar([2014, 2015, 2016, 2017, 2018], [100, 150, 100, 50, 150], color='red', width=0.3, label='Rainbow Receive')
plt.bar([2014, 2015, 2016, 2017, 2018], [80, 120, 90, 40, 140], color='green', width=0.4, label='Rainbow Release')
plt.bar([2014, 2015, 2016, 2017, 2018], [100, 80, 70, 80, 100], color='orange', width=0.5, label='Brown Receive')
plt.bar ([2014, 2015, 2016, 2017, 2018], [70, 70, 70, 70, 90], color='blue', width=0.6, label='Brown Release')	

plt.ylabel('Eggs by the 1000s')	
plt.xticks([2014, 2015, 2016, 2017, 2018])
plt.legend()
plt.title('Brown & Rainbow Trout Hatch and Release')
plt.show()			