/** @param {NS} ns **/
export async function main(ns) {
     var target = ns.getHostname();
     ns.nuke(target);
    while (true){
          await ns.weaken(target);
        await ns.hack(target);
          await ns.grow(target);
    }
}