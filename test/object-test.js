0
  Star 0  Fork 60 eddiemoonie/javascript-objects-abcp
forked from learn-co-students/javascript-objects-abcp
 Code  Pull requests 0  Projects 0  Insights  Settings
Branch: solution Find file Copy pathjavascript-objects-abcp/test/objects-test.js
e6c19a6  on Dec 6, 2016
@gj gj make sure removeFromPlaylist() actually removes artist-song pairs fro…
2 contributors @gj @pletcher
RawBlameHistory     
43 lines (34 sloc)  1.38 KB
/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('objects', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
  })

  it('defines an object called `playlist` containing at least one artist-song pair', () => {
    expect(typeof playlist).to.equal('object')
    expect(Object.keys(playlist).length).to.be.greaterThan(0)
  })

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    before(() => {
      playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
    })

    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

      expect(playlist).
        to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })
  })

  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      removeFromPlaylist(playlist, 'Slowdive')

      expect(playlist).
        to.contain.all.keys({'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

      expect(playlist).
        not.to.have.all.keys({'Slowdive': 'Alison'})
    })
  })
})