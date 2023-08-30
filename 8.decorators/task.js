//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = args.join(',');
    for(let i = 0; cache.length > i; i ++){
      if(cache[i].hash === hash){
      return "Из кеша: " + cache[i].value; 
      }
    }
    
    const result = func(...args);
    cache.push({hash: hash,value: result});
    const actualCacheValuesCount = Object.keys(cache).length;

    if(actualCacheValuesCount > maxCacheValuesCount){
      cache.shift();
    }

    return "Вычисляем: " + result;
  }
}



//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount += 1;
    if (timeoutId === null) {
      func(...args);
      wrapper.count += 1;
    }
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count += 1;
      }, delay);
  }
  
  return wrapper;
}

