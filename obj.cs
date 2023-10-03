/// create - INIT
state = "idle";
moveX = 0;
moveY = 0;
grav = 0.69;
spd_normal = 3;
spd_run = 5;
spd_roll = 10;

//ALLPY
my_spd = spd_normal;

/// step - STATE CONTROLLER
// 1. input
inputW = keyboard_check_pressed(ord("W"));
inputA = keyboard_check(ord("A"));
inputS = keyboard_check_pressed(ord("S"));
inputD = keyboard_check(ord("D"));
inputShift = keyboard_check_pressed(vk_shift);

// 4. Physics
if moveY < 10 {
    moveY = min(moveY+grav, 9);
}
// 5. collision check
if place_meeting(x,y,obj_ground) {
        repeat (abs(moveY)){
    if not place_meeting(x,y+sign(y),obj_ground){
        y += sign(moveY);
    }
        }
    moveY = 0 
}
// 2. state change
if state == "idle" {
    sprite_index = s_idle;
    image_speed = 1/3;

   if inputW {
        moveY = -12;
    }

    if inputA or inputD{
        state = "move";
    }
}
else if state == "move" {
    sprite_index = s_move;
    if inputShift {my_spd = spd_run}
    else  {my_spd = spd_normal}
    if inputD + inputA == 0 {
        state = "idle"
    } 
    moveX = (inputD - inputA) * my_spd;
}
// 3. Apply
y += moveY;
x += moveX
