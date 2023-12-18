import React from 'react';
import ReactDOM from 'react-dom/client';
 //import '../../index.css';
import data from '../data.json'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../index.css';

class Biography extends React.Component{
    render(){
        return(<Timeline lineColor={' #e5b007'}>
        <TimelineItem key="001"
          dateText={data.robbers[this.props.index].bio[0].time}
          dateInnerStyle={{ background: ' #e5b007' ,color:'#565656', font:'bold 17px/52px "bahnschrift" , sans-serif'}}
          style={{ color: '#565656' }}
        >
          <h4>{data.robbers[this.props.index].bio[0].info}</h4>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText={data.robbers[this.props.index].bio[1].time}
          dateInnerStyle={{ background: ' #e5b007' ,color:'#565656', font:'bold  17px/52px "bahnschrift" , sans-serif'}}
          bodyContainerStyle={{
            background: '#565656',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            font:' "bahnschrift"'
          }}     
        >
          <h4 style={{ color: '#fff' }}>{data.robbers[this.props.index].bio[1].info}</h4>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText={data.robbers[this.props.index].bio[2].time}
          dateInnerStyle={{ background: ' #e5b007' ,color:'#565656', font:'bold 17px/52px "bahnschrift" , sans-serif'}}
        >
        <h4>{data.robbers[this.props.index].bio[2].info}</h4>
        </TimelineItem>
        </Timeline>)
    }
}
export default Biography