import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;


function Vehicles() {
  return (
    <div className=" w-[90%]  h-[400px] mt-6  md:h-[350px] flex items-center   shadow-[0px_0px_10px_0px_rba(0,0,0,0.3)]   ">
        <marquee
    behavior="scroll"
    direction="right"
    scrollamount="5"    
    className=" md:w-[100%] flex mt-7  "
  >
    <div className=" flex gap-7 ">
    <Card className=' '  
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://imgs.search.brave.com/j_3F0pBpm59lOG-zkZaXdnOD3pSQ7ZBIv3Se_68TE0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzk2/L2Y4LzgwOTZmODg0/ODE5NGQ4MTI0N2Q5/MDdjOWUyYWMyNzBm/LmpwZw" />} >
        <Meta title="hallo" description="good place" />
      </Card>
      <Card className=' h-[]]'  
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://imgs.search.brave.com/j_3F0pBpm59lOG-zkZaXdnOD3pSQ7ZBIv3Se_68TE0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzk2/L2Y4LzgwOTZmODg0/ODE5NGQ4MTI0N2Q5/MDdjOWUyYWMyNzBm/LmpwZw" />} >
        <Meta title="hallo" description="good place" />
      </Card>
      <Card className=' h-[]]'  
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://imgs.search.brave.com/j_3F0pBpm59lOG-zkZaXdnOD3pSQ7ZBIv3Se_68TE0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzk2/L2Y4LzgwOTZmODg0/ODE5NGQ4MTI0N2Q5/MDdjOWUyYWMyNzBm/LmpwZw" />} >
        <Meta title="hallo" description="good place" />
      </Card>
      <Card className=' h-[]]'  
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://imgs.search.brave.com/j_3F0pBpm59lOG-zkZaXdnOD3pSQ7ZBIv3Se_68TE0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzk2/L2Y4LzgwOTZmODg0/ODE5NGQ4MTI0N2Q5/MDdjOWUyYWMyNzBm/LmpwZw" />} >
        <Meta title="hallo" description="good place" />
      </Card>
      <Card className=' h-[]]'  
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://imgs.search.brave.com/j_3F0pBpm59lOG-zkZaXdnOD3pSQ7ZBIv3Se_68TE0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzk2/L2Y4LzgwOTZmODg0/ODE5NGQ4MTI0N2Q5/MDdjOWUyYWMyNzBm/LmpwZw" />} >
        <Meta title="hallo" description="good place" />
      </Card>
     
        
    </div>
  </marquee>
  
        </div>
  )
}

export default Vehicles
