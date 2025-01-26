const longestCommonPrefix = require('./14_longest_commom_prefix');

test("expect to output fl", ()=>{
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
})

test("expect to output empty", ()=>{
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
})