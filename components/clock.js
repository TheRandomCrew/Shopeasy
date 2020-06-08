import { useSelector } from 'react-redux';

import { selectClock } from '../lib/slices/clockSlice';


const formatTime = (time) => {
  // cut off except hh:mm:ss
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const { lastUpdate, light } = useSelector(selectClock)

  return (
    <div className={light ? 'light' : ''}>
      {formatTime(lastUpdate)}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #F76100;
          font: 50px menlo, monaco, monospace;
          border-radius: 20px;
          background: linear-gradient(145deg, #d6f9fd, #b4d2d4);
          box-shadow:  10px 10px 30px #aac6c9, 
          -10px -10px 30px #e6ffff;
        }

        .light {
          background-color: silver;
        }
      `}</style>
    </div>
  )
}

export default Clock
