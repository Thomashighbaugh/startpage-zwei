import {useState} from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'


function Cal() {

  const [value, onChange] = useState(new Date());
  const month = moment().format('MMMM')
  const year = moment().format('YYYY')

  return <div className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-xl px-4  py-10 h-full">

    <div className="overflow-auto mx-auto mb-8 mt-4 "
      style={{maxWidth: '330px'}}>
      <div className="text-white text-5xl font-bold float-left">{month}</div>
      <div className="text-white text-5xl font-bold float-right">{year}</div>
    </div>

    <Calendar
      onChange={onChange}
      value={value}
      showNavigation={false}
      onClickDay={() => console.log('clicked day')}
    />
  </div>
}

export default Cal
