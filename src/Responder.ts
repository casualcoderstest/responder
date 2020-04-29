class Responder {
  config: Array<String>;
  viewports: Array<String>;
  enter: any;
  exit: any;
  macthMD: Boolean;
  
  constructor(viewports: Array<String>, config: Array<any>, enterFunction: any, exitFunction: any , macthMD: Boolean) {
    this.config = config;
    this.viewports = viewports;
    this.enter = enterFunction;
    this.exit = exitFunction;
    this.macthMD = macthMD;
  }
  
  validate(): boolean {
    let output = true;
    this.viewports.forEach(viewport => {
      const index = this.config.indexOf(viewport)
      if (index === -1) {  output = false }
    })
    return output;
  }
  
  defineFunctionToRun(): string {
   let output = ''
    if (this.macthMD) {
        output = this.enter()
    } else {
        output = this.exit()
    }
    return output
  }
}

export default Responder;
