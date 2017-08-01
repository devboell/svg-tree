#### notes

in case of multiple childless partners, the totalWidth of the partner node is equal to the node width itself. This causes a problem during displaying, where `x = (totalWidth / 2)` is smaller than nodeWidth and therefore half of the node is 'out of bounds' (indented to the right)

Currently this is fixed by assigning a min width `partnerNode.totalWidth = 2 * nodeWidth` in case of childless partner nodes. However, visually the distance between the first partner and the other partners may be too big.

An other solution is to check in the component if `totalWidth <= boxWidth + marginX` and adjust there (in SVGPartnerNode and SVGPartnerLink, when setting resp. `x` and `targetX`)

For now, this is an edge case and I will leave it like it is.
