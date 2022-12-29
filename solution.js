function apartmentHunting(blocks, reqs) {

  let distanceToReq = Array(blocks.length).fill(Number.MIN_SAFE_INTEGER)
 	
	for (let i = 0; i < blocks.length; i++) {  
    	
    		for (const element of reqs) {

        		let d= Number.MAX_SAFE_INTEGER 

        		for (let j = 0; j < blocks.length; j++) {
           			
            			if (blocks[j][element]) {
                			d=Math.min(d,Math.abs(i-j))

           			 }
            
        		}
      
        	distanceToReq[i]=Math.max(d,distanceToReq[i])
    	}
   

}

return distanceToReq.indexOf( Math.min(...distanceToReq))
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;

