# Appartment Hunting
## Input :- array of objects for blocks and array for requirements
## Output :- index of optimized block

>> Declare an array "distanceToReq", same length as 'blocks' array
with default value as smallest possible integer.

>> Declare variable 'd' with maximum possible integer so that after checking all requirements set it back to maximum possible integer.

>> Check each requirements of one block inside every blocks.

>> If a requirement is true find the distance by subtracting position indexes of blocks
find and assign minimum distance by comparing previous distance and curernt distance to 'd' 

>> Check for this requirment in other blocks repeat the above step.

>> Insert 'd' into the appropriate index of block.

>> Repeat this process for  each requirement and find the requirement with greatest distance and insert it into 'distanceToReq' array.

>> Repeat process for every block.

>> Find minmum distance to a requirement from 'distanceToReq' array.

>> Return index of minimum distance in 'distanceToReq' 