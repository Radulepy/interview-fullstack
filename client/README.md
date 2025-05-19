## Start & Develop

- **Start dev server:**  
  ```sh
  npm run dev
  ```
- **Build for production:**  
  ```sh
  npm run build
  ```
- **Preview production build:**  
  ```sh
  npm run preview
  ```

---

## Component Example

### Functional Component with Props

**Interface (external file):**
```ts
// src/components/Demo.types.ts
export interface DemoProps {
  title: string;
  count: number;
}
```

**Component:**
```tsx
// src/components/Demo.tsx
import React from 'react';
import { DemoProps } from './Demo.types';

const Demo: React.FC<DemoProps> = ({ title, count }) => (
  <div>
    <h2>{title}</h2>
    <p>Count: {count}</p>
  </div>
);

export default Demo;
```

**Component:**
```tsx
const Demo: React.FC<{ title: string; count: number }> = ({ title, count }) => (
  <div>
    <h2>{title}</h2>
    <p>Count: {count}</p>
  </div>
);
export default Demo;
```

**Usage:**
```tsx
import Demo from './components/Demo';

<Demo title="Demo Title" count={5} />
```

---

## React Hooks

- **useState**
  ```tsx
  const [value, setValue] = useState(initialValue);
  ```
- **useEffect**
  ```tsx
  useEffect(() => {
    // side effect
    return () => {
      // cleanup
    };
  }, [dependencies]);
  ```

---

## Useful Tricks

- **Conditional rendering:**  
  ```tsx
  {isVisible && <span>Visible!</span>}
  ```
- **List rendering:**  
  ```tsx
  {items.map(item => <div key={item.id}>{item.name}</div>)}
  ```
- **Event handler:**  
  ```tsx
  <button onClick={() => setCount(count + 1)}>Increment</button>
  ```
- **Fetch data:**  
  ```tsx
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  ```