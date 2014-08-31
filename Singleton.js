var Singleton=function(){
	if (Singleton._singletonInstance!=null) {
		return Singleton._singletonInstance;
	}
	
	/* 
	
	this.function1=function(){};
	
	this.var="Var";
	
	*/
	
	Singleton._singletonInstance=this;
	return this;
};

Singleton._singletonInstance=null;

/* optional getInstance method */

Singleton.getInstance=function(){
	if (this._singletonInstance==null) {
		this._singletonInstance=new Singleton();
	}
	return this._singletonInstance;
};
