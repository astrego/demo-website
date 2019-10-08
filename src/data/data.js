import React from 'react';

export const animateList = [1, 2, 3, 4, 5];

export const text = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex',
    'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque.',
    'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu.',
    'Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.'
]

export const textWithTitle = [
    {
        title: 'This is a demo site',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="38px" height="59px">
            <title>rocket</title>
            <g className="rocket" >
                <path d="M10.5,14h-5a.5.5,0,0,1-.5-.5V5.7A7.125,7.125,0,0,1,7.688.11a.5.5,0,0,1,.625,0A7.125,7.125,0,0,1,11,5.7v7.8A.5.5,0,0,1,10.5,14ZM6,13h4V5.7A6.124,6.124,0,0,0,8,1.158,6.124,6.124,0,0,0,6,5.7Z" />
                <path d="M2.5,16a.5.5,0,0,1-.5-.5v-4A4.282,4.282,0,0,1,5.384,7.514.5.5,0,0,1,6,8v4.5a.5.5,0,0,1-.146.354l-3,3A.5.5,0,0,1,2.5,16ZM5,8.708A3.063,3.063,0,0,0,3,11.5v2.792l2-2Z" />
                <path d="M13.5,16a.5.5,0,0,1-.354-.146l-3-3A.5.5,0,0,1,10,12.5V8a.5.5,0,0,1,.616-.486A4.282,4.282,0,0,1,14,11.5v4a.5.5,0,0,1-.5.5ZM11,12.293l2,2V11.5a3.084,3.084,0,0,0-2-2.788Z" />
                <path d="M9.5,16h-3a.5.5,0,0,1-.447-.276l-1-2A.5.5,0,0,1,5.5,13h5a.5.5,0,0,1,.447.724l-1,2A.5.5,0,0,1,9.5,16ZM6.809,15H9.191l.5-1H6.309Z" />
                <path d="M8,6A1.5,1.5,0,1,1,9.5,4.5,1.5,1.5,0,0,1,8,6ZM8,4a.5.5,0,1,0,.5.5A.5.5,0,0,0,8,4Z" />
            </g>
        </svg>
    },
    {
        title: 'Sed ut perspiciatis',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="38px" height="59px">
            <title>electric train</title>
            <g className="train" id="train">
                <path d="M12,14H4a1,1,0,0,1-1-1V5.5A2.5,2.5,0,0,1,5.5,3h5A2.5,2.5,0,0,1,13,5.5V13A1,1,0,0,1,12,14Zm0-1v0ZM5.5,4A1.5,1.5,0,0,0,4,5.5V13h8V5.5A1.5,1.5,0,0,0,10.5,4Z" />
                <path d="M5.52,12a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.01a.5.5,0,0,1,0,1Z" />
                <path d="M10.52,12a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.01a.5.5,0,0,1,0,1Z" />
                <path d="M3.5,16a.5.5,0,0,1-.4-.8l1.5-2a.5.5,0,0,1,.8.6l-1.5,2A.5.5,0,0,1,3.5,16Z" />
                <path d="M12.5,16a.5.5,0,0,1-.4-.2l-1.5-2a.5.5,0,0,1,.8-.6l1.5,2a.5.5,0,0,1-.4.8Z" />
                <path d="M10.5,9h-5A.5.5,0,0,1,5,8.5V6A1,1,0,0,1,6,5h4a1,1,0,0,1,1,1V8.5A.5.5,0,0,1,10.5,9ZM6,8h4V6H6Z" />
                <path d="M11.5,2a.5.5,0,0,1-.5-.5.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5.5.5,0,0,1-1,0A1.5,1.5,0,0,1,5.5,0h5A1.5,1.5,0,0,1,12,1.5.5.5,0,0,1,11.5,2Z" />
                <path d="M8,4a.5.5,0,0,1-.5-.5V.5a.5.5,0,0,1,1,0v3A.5.5,0,0,1,8,4Z" />
            </g>
        </svg>
    },
    {
        title: 'Duis arcu tortor',
        text: 'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="38px" height="59px">
            <title>hyperloop</title>
            <g>
                <path d="M3.5,16a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,1,0v1A.5.5,0,0,1,3.5,16Z" />
                <path d="M12.5,16a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,1,0v1A.5.5,0,0,1,12.5,16Z" />
                <path d="M12.5,15.5a.5.5,0,0,1-.417-.225A2.844,2.844,0,0,0,9.7,14H9.5a.5.5,0,0,1,0-1h.2a3.839,3.839,0,0,1,3.217,1.725.5.5,0,0,1-.417.775Z" />
                <path d="M3.5,15.5a.5.5,0,0,1-.417-.775A3.839,3.839,0,0,1,6.3,13h.2a.5.5,0,0,1,0,1H6.3a2.844,2.844,0,0,0-2.383,1.275A.5.5,0,0,1,3.5,15.5Z" />
                <path d="M10,13H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5h4a2,2,0,0,1,2,2v4A2,2,0,0,1,10,13ZM6,6A1,1,0,0,0,5,7v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1Z" />
                <path d="M14.5,2H1.5a.5.5,0,0,1,0-1h13a.5.5,0,0,1,0,1Z" />
                <path d="M10,6a.5.5,0,0,1-.485-.379L9.109,4H6.891L6.485,5.621a.5.5,0,0,1-.971-.242l.5-2A.5.5,0,0,1,6.5,3h3a.5.5,0,0,1,.485.379l.5,2a.5.5,0,0,1-.364.606A.49.49,0,0,1,10,6Z" />
                <path d="M8,4a.5.5,0,0,1-.5-.5V.5a.5.5,0,0,1,1,0v3A.5.5,0,0,1,8,4Z" />
                <path d="M8,10A6.74,6.74,0,0,1,4.213,8.91a.5.5,0,0,1,.574-.819,6.385,6.385,0,0,0,6.426,0,.5.5,0,0,1,.574.819A6.74,6.74,0,0,1,8,10Z" />
                <path d="M8,10a.5.5,0,0,1-.5-.5v-4a.5.5,0,0,1,1,0v4A.5.5,0,0,1,8,10Z" />
                <path d="M9.5,14.5h-3A.5.5,0,0,1,6,14V12.5a.5.5,0,0,1,1,0v1H9v-1a.5.5,0,0,1,1,0V14A.5.5,0,0,1,9.5,14.5Z" />
            </g>
        </svg>
    },
    {
        title: 'Etiam sit amet',
        text: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="38px" height="59px">
            <title>cruise ship</title>
            <g id="ship">
                <path d="M12,16a1.785,1.785,0,0,1-1.381-.676.765.765,0,0,0-1.232-.008,1.782,1.782,0,0,1-2.768.008.765.765,0,0,0-1.232-.008,1.782,1.782,0,0,1-2.768.008.765.765,0,0,0-1.232-.008.5.5,0,0,1-.768-.641,1.786,1.786,0,0,1,2.762,0,.765.765,0,0,0,1.232.008,1.782,1.782,0,0,1,2.768-.008.765.765,0,0,0,1.232.008,1.782,1.782,0,0,1,2.768-.008.765.765,0,0,0,1.232.008,1.782,1.782,0,0,1,2.768-.008.5.5,0,0,1-.768.641.767.767,0,0,0-1.227,0A1.789,1.789,0,0,1,12,16Z" />
                <path d="M12.2,15.98a.508.508,0,0,1-.18-.033.5.5,0,0,1-.287-.646l2.107-5.48L8,8.023,2.159,9.82,4.267,15.3a.5.5,0,0,1-.934.359l-2.3-5.98a.5.5,0,0,1,.319-.657l6.5-2a.506.506,0,0,1,.295,0l6.5,2a.5.5,0,0,1,.319.657l-2.3,5.98A.5.5,0,0,1,12.2,15.98Z" />
                <path d="M12.5,9.38a.5.5,0,0,1-.5-.5V4h-.5a.5.5,0,0,1-.5-.5V2H5V3.5a.5.5,0,0,1-.5.5H4V8.88a.5.5,0,0,1-1,0V3.5A.5.5,0,0,1,3.5,3H4V1.5A.5.5,0,0,1,4.5,1h7a.5.5,0,0,1,.5.5V3h.5a.5.5,0,0,1,.5.5V8.88A.5.5,0,0,1,12.5,9.38Z" />
                <path d="M8,2a.5.5,0,0,1-.5-.5V.5a.5.5,0,0,1,1,0v1A.5.5,0,0,1,8,2Z" />
                <rect x="6" y="3" width="1" height="1" />
                <rect x="9" y="3" width="1" height="1" />
                <rect x="10" y="5" width="1" height="1" />
                <rect x="7.5" y="5" width="1" height="1" />
                <rect x="5" y="5" width="1" height="1" />
            </g>
        </svg>
    },
    {
        title: 'Vestibulum volutpat',
        text: 'Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="38px" height="59px">
            <title>sport bicycle</title>
            <g>
                <path d="M3,13a3,3,0,1,1,3-3A3,3,0,0,1,3,13ZM3,8a2,2,0,1,0,2,2A2,2,0,0,0,3,8Z" />
                <path d="M13,13a3,3,0,1,1,3-3A3,3,0,0,1,13,13Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,13,8Z" />
                <path d="M5.5,4h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z" />
                <path d="M7,10.5H3a.5.5,0,0,1-.437-.743l2.5-4.5A.5.5,0,0,1,5.5,5h6a.5.5,0,0,1,.354.854l-4.5,4.5A.5.5,0,0,1,7,10.5Zm-3.15-1H6.793l3.5-3.5h-4.5Z" />
                <path d="M5.5,6a.5.5,0,0,1-.447-.276l-1-2a.5.5,0,1,1,.895-.447l1,2A.5.5,0,0,1,5.5,6Z" />
                <path d="M7,10.5a.5.5,0,0,1-.475-.342l-1.5-4.5a.5.5,0,0,1,.949-.316l1.5,4.5a.5.5,0,0,1-.316.633A.5.5,0,0,1,7,10.5Z" />
                <path d="M13,10.5a.5.5,0,0,1-.475-.342l-2.17-6.5A.5.5,0,0,1,10.83,3H13.5a1.5,1.5,0,0,1,0,3,.5.5,0,0,1,0-1,.5.5,0,0,0,0-1H11.524l1.95,5.842a.5.5,0,0,1-.316.633A.5.5,0,0,1,13,10.5Z" />
            </g>
        </svg>
    }
]