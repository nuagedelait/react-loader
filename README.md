# React Loader Component

## Based on

- js es6 classes
- React context to use as global
- React Component for display

## Basic Usage

```
npm install @nuagedelait/react-loader --save
```

Wrap jour content into the loader component so you can call it from a context

```
import Loader from '@nuagedelait/react-loader';

const myApp = (props) => {
  return(
    <Loader>
      <YouContent/>
    </Loader>
    )
}
```

## Use your own component for display

Pass your component as `display` prop.

```
<Loader display={MyComponent}/>
```
