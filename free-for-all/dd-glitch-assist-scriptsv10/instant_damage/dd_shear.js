// dd_sheer.js

var ZOOM = -20;

export function glitch_frame(frame)
{
    // bail out if we have no motion vectors
    let mvs = frame["mv"];
    if ( !mvs )
        return;
    // bail out if we have no forward motion vectors
    let fwd_mvs = mvs["forward"];
    if ( !fwd_mvs )
        return;

	var M_H = fwd_mvs.length/2;
    // clear horizontal element of all motion vectors
    for ( let i = 0; i < fwd_mvs.length; i++ )
    {

        // loop through all rows

        let row = fwd_mvs[i];
        var M_W = row.length/2;
        for ( let j = 0; j < row.length; j++ )
        {
            // loop through all macroblocks
            let mv = row[j];

            // THIS IS WHERE THE MAGIC HAPPENS
            //if(i>M_W){
				mv[0] = mv[0] + ((i - M_W) / 100)*ZOOM;
            	mv[1] = mv[1] + ((j - M_H) / 100)*ZOOM;
			//}
        }
    }
}
