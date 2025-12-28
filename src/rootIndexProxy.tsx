import React from 'react'

const modules = import.meta.glob('../index.tsx', { eager: true }) as Record<string, any>
const Component = modules['../index.tsx']?.default as React.ComponentType<any>

export default Component