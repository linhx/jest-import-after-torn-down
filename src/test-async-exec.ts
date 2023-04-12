const dynamicImport = () => {
  setTimeout(async () => {
    const otherModule: any = await import('./other-module');
    const x: any = function () {}
    x instanceof otherModule;
  }, 6000)
}

dynamicImport();
