

import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";
import GridViewImages from "./views/gridView";
import ListViewImages from "./views/listView";
import { Tooltip } from '@mui/material';
import { grey, pink } from '@mui/material/colors';
import HomeView from './views/homeView';
import AssistantIcon from '@mui/icons-material/Assistant';

export default function MainGalleria() {
    const [index, setIndex] = useState(2)


    const components = [
        <div className="relative-position" style={{
            height: '100dvh',
            width: '100dvw',
            padding: 0,
            margin: 0,
            zIndex: 10
        }}>
            <HomeView />
        </div>,
        <div className="relative-position" style={{
            minHeight: '100dvh',
            width: '100dvw',
            padding: 0,
            margin: 0,
            zIndex: 10
        }}>
            <GridViewImages />
        </div>,
        <div className="relative-position" style={{
            height: '100dvh',
            width: '100dvw',
            padding: 0,
            margin: 0,
            zIndex: 10
        }}>
            <ListViewImages />
        </div>
    ]

    return (
        <>
            <div style={{
                position: 'fixed',
                bottom: '25px',
                left: '50%',
                transform: "translateX(-50%)",
                zIndex: 100,
                padding: '10px 15px 5px 15px',
                borderRadius: '4px',
                backgroundColor: 'white',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}>

                <div style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }} >
                    <div style={{
                        marginLeft: 'auto',
                    }}>
                        <Tooltip arrow title="Thank You" placement="top" >
                            <AssistantIcon sx={{ color: index === 0 ? pink[300] : grey[500] }} onClick={() => setIndex(0)} />
                        </Tooltip>
                        <Tooltip arrow title="Grid" placement="top" style={{
                            margin: '0 20px'
                        }}>
                            <GridViewIcon sx={{ color: index === 1 ? pink[300] : grey[500] }} onClick={() => setIndex(1)} />
                        </Tooltip>
                        <Tooltip arrow title="List" placement="top" style={{
                            marginRight: '20px'
                        }}>
                            <ListIcon sx={{ color: index === 2 ? pink[300] : grey[500] }} onClick={() => setIndex(2)} />
                        </Tooltip>
                        <Tooltip arrow title="Could not find your image?" placement="top" >
                            <img src="/drive.png" height={18} style={{ marginBottom: '3px' }} onClick={() => {
                                window.location.href = "https://drive.google.com/drive/folders/1Al56qVp4kvoOfjFhHFos96X1iqb_EApX"
                            }} />
                        </Tooltip>
                    </div>
                </div>
            </div>
            {
                components[index]
            }
        </>

    )
}


