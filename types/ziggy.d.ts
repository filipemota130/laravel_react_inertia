declare module 'ziggy-js' {
    const route: (name: string, params?: Record<string, string | number>) => string;
    export default route;
}