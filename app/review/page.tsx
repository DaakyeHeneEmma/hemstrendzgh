import React from 'react'

function Review() {
  return (
    <>
        <div className="grid gap-4 mb-5">
            <div>
                <img className="h-auto max-w-full" 
                     src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head.jpg" 
                     alt="" 
                     style={{
                        width:"100%",
                        height:"100%"
                     }}/>
            </div>
            <div className="grid grid-cols-5 gap-3 p-2">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head1.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head6.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head9.jpg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Review