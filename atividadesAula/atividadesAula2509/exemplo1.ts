class Singleton {
    constructor() {
    if (!Singleton.instance) {
    /* Qualquer dado que você deseja
    armazenar na instância única. */
    this.data = [];
    Singleton.instance = this;
    }
    return Singleton.instance;
    }
    // Métodos da instância Singleton
    addData(item) {
    this.data.push(item);
    }
    getData() {
    return this.data;
    }
    }
    
    const singleton1 = new Singleton();
    singleton1.addData("Item 1");
    
    const singleton2 = new Singleton();
    singleton2.addData("Item 2");
    
    console.log(singleton1.getData());
    console.log(singleton2.getData());
    console.log(singleton1 === singleton2);