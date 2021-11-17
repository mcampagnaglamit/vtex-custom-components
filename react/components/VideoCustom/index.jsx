import React from 'react';
import YouTube from 'react-youtube';
import styles from './css/styles.css';


const VideoCustom = (props)=>{
    return(
        <section className={styles.VideoCustomCont}>
            {props.thumbActive ?
                <>
                    <img className={styles.VideoCustomThumbnail} src={props.thumbUrl} />
                    <YouTube 
                        videoId={props.videoId}
                        containerClassName={styles.VideoCustomIframeCont} 
                        className={styles.VideoCustomIframe} 
                    />
                </>
                :
                <YouTube 
                    videoId={props.videoId}
                    containerClassName={styles.VideoCustomIframeCont} 
                    className={styles.VideoCustomIframe} 
                />
            }
        </section>
    )
}

VideoCustom.schema = {    
    title: 'Glamit Video Custom',
    type: 'object',
    properties:{
        videoId: {
            title:'video ID',
            type: 'string',
            default: 'ug6Wva_84HU'
        },
        thumbActive:{
            title:'Tiene Thumbnail?',
            type:'boolean',
            default: true
        },           
        thumbWidth:{
            title:'Thumbnail ancho',
            type: 'string',
            default: '50%'
        },
        thumbUrl:{
            title:'Url de Imagen thumbnail del video',
            type:'string',
            default:'https://via.placeholder.com/1280x500.png'
        }
    }    
}

export default VideoCustom