//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];
  
	function wrapper(...args) {    
	  const hash = md5(JSON.stringify(args));    
	  let objectInCache = cache.find((obj) => obj.hash === hash);
	  if (objectInCache) {      
		console.log(`Из кэша: ${objectInCache.result}`);
		return `Из кэша: ${objectInCache.result}`;
	  }
	  let result = func(...args);    
	  cache.push({ hash, result });     
	  if (cache.length > 5) {
		cache.shift();     
	  }
	  console.log(`Вычисляем: ${result}`);
	  return `Вычисляем: ${result}`;  
	}  
	return wrapper;
  }
  
	
  //Задача № 2
  function debounceDecoratorNew(func, delay) {
	let timer = null;
	function wrapper(...args) {
	  if (timer === null) {
		func(...args);
		wrapper.count++;
	  }
	  clearTimeout(timer);
	  timer = setTimeout(function() {
		func(...args);
		wrapper.count++;
	  }, delay);
	  wrapper.allCount++;
	}
	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
  }
