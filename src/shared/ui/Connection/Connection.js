import { Select } from 'shared/ui/Select';
// import ArrowSelect from './components/ArrowSelect/ArrowSelect.js'
import classes from './Connection.module.scss'

export const Connection = ({ connection, connect, onConnectChange, isValidConnect }) => {
  const { options, label } = connection

  return (
    <label className={classes.connection}>
      {/* <span>{label}</span> */}
      {connect === '' && <span>{label}</span>}

      {/* <Select */}
        // connect={connect}
        // onConnectChange={onConnectChange}
        // isValidConnect={isValidConnect}
        // connection={connection}
        // options={options}
      {/* /> */}
    </label>
  )
};
