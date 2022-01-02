export function myConnectionDecorator():MethodDecorator {return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any) {
        await target.connect()
        const result = await originalMethod.apply(this, args);
        await target.disconnect()
        return result;
      };
    
      return descriptor;}
}