# TODO
## SOMMAIRE
1. [UNIFICATION](##UNIFICATION)
	1. [MINERAI](###MINERAI)
2. [ITEM](##ITEM)
3. [CRAFT](##CRAFT)  
	1. [Carfting Table](###Carfting_Table)    
	2. [CREATE](###CREATE)  
		1. [Mechanical_Crafter](####Mechanical_Crafter)  
		2.  [Deployer](####Deployer)  
		3. [Mechanical Mixer](####Mechanical_Mixer)  
		4. [Spout](####Spout)  
		5. [Crushing Wheel](####Crushing_Wheels)
4. [MODS](##MODS)
## UNIFICATION
### MINERAI

- [ ] Cuivre
- [ ] Étain
- [ ] Argent
- [ ] Plomb
- [ ] Nickel
- [ ] Zinc
- [ ] Uranium

## ITEM
1. [ ] Blaze Head - esi:blaze_head
2. [ ] Dragon blood neutral - esi:iceandfire_dragon_neutral_blood
3. [ ] Ultimate Lava - esi:fluid_ultimate_lava
4. [ ] .

## CRAFT

### VANILLA
#### Carfting_Table

1. [x] Ametyst Shard - 4 * minecraft:amethyst_shard  
    ```
    B;
    
    B = minecraft:amethyst_shard
    ```
2. [ ] Blaze Head  - esi:blaze_head
    ```
       B;B;B
       B;S;B
       B;B;B
    
    B = blaze [Rode/Poder/esance ?]
    S = Wither Skul
    ```
3. [x] FluxDust - 9x fluxnetworks:flux_dust
    ```
       R;R;R
       R;O;R
       R;R;R
    
    R = minecraft:redstone
    O = create:poudered_obsidian
    ```
4. [x] 4x minecraft:quartz 
    ```
    B;
    
    B = minecraft:quartz_block
    ```
5. [x] Rose Quartz - biomesoplenty:rose_quartz
    ```
    B;
    
    B = biomesoplenty:rose_quartz_block
    ```

#### Brewing_Stand
1. [ ] dragon blood neutral - esi:iceandfire_dragon_neutral_blood
    ```
      I
    B;B;B
    
    I = Blaze powder
    B = water botle
    ```
2. [ ] fire dragon blood - iceandfire:fire_dragon_blood
    ```
      I
    B;B;B
    
    I = iceandfire:fire_dragon_blood
    B = esi:iceandfire_dragon_neutral_blood
    ```
3. [ ] ice dragon blood - iceandfire:ice_dragon_blood
    ```
      I
    B;B;B
    
    I = iceandfire:ice_dragon_blood
    B = esi:iceandfire_dragon_neutral_blood
    ```
4. [ ] lightning dragon blood - iceandfire:lightning_dragon_blood
    ```
      I
    B;B;B
    
    I = iceandfire:lightning_dragon_blood
    B = esi:iceandfire_dragon_neutral_blood
    ```
### CREATE
#### Mechanical_Crafter

1. [ ] Blaze Burner - create:blaze_burner	
	```
          B;C;B
            S  
        B;S;N;S;B   
          0;S;0 
            B    
        
        C = esi:blaze_head
        S = create:iron_sheet
        N = minecraft:netherrack
        B = iceandfire:fire_dragon_blood
	```
2. [ ] .
#### Deployer

1. [x] Polished Rose Quartz - create:polished_rose_quartz
	```
        C;S
        
        C = biomesoplenty:rose_quartz_cluster and  alick
        S = create:sand_paper or abov
	```
2. [ ] 

#### Mechanical_Mixer
1. [x] Ultimate Lava - 50mB esi:fluid_ultimate_lava
	```
        250mB lava
        4 * Nether Star
	```
2. [x] dragon blood neutral - 3x esi:iceandfire_dragon_neutral_blood
    ```    
    Blaze powder
    3x water botle
    Heated
    ```
3. [x] fire dragon blood - 3x iceandfire:fire_dragon_blood
    ```
    iceandfire:fire_dragon_blood
    3x esi:iceandfire_dragon_neutral_blood
    Heated
    ```
4. [x] ice dragon blood - 3x iceandfire:ice_dragon_blood
    ```
    iceandfire:ice_dragon_blood
    3x esi:iceandfire_dragon_neutral_blood
    ```
5. [x] lightning dragon blood - 3x iceandfire:lightning_dragon_blood
    ```
    iceandfire:lightning_dragon_blood
    3x esi:iceandfire_dragon_neutral_blood
    Super-Heated
    ```
#### Spout
1. [ ] Creative Blaze Cake - create:creative_blaze_cake
	```
		L = 1000
		B
	
		L = esi:fluid_ultimate_lava
		B = create:blaze_bake_base)
	```
2. [ ] .
#### Crushing_Wheels

1. [x] Rose Quartz - 4x biomesoplenty:rose_quartz_chunk
    ```
        Crused = biomesoplenty:rose_quartz
        
        Output = 4 * biomesoplenty:rose_quartz_chunk
            + 25% chance biomesoplenty:rose_quartz_shard
            + 10% chance biomesoplenty:rose_quartz_crystal
            + 5% chance biomesoplenty:rose_quartz_gem
    ```

	
## MODS
1. [ ] [Handcrafted](https://www.curseforge.com/minecraft/mc-mods/handcrafted)
2. [ ] [Addons KubJS](https://github.com/AlmostReliable/morejs/wiki)
3. [ ] [Iron Furnace](Iron Furnaces)
4. [ ] [Click Machine](https://www.curseforge.com/minecraft/mc-mods/click-machine)
5. [ ] [Compact Mahinees](https://www.curseforge.com/minecraft/mc-mods/compact-machines)
6. [ ] [RFTools Utility](https://www.curseforge.com/minecraft/mc-mods/rftools-utility)
