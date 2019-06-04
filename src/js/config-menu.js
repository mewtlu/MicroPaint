var menu_template = `
	<ul>
		<li><a class="trn" data-target="file/save.save_data_url" href="#">Save</a></li>
		<li>
			<a class="trn" href="#">Edit</a>
			<ul>
				<li><a class="trn" data-target="edit/undo.undo" href="#">Undo</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="edit/selection.delete" data-key="Del" href="#">Delete selection</a></li>
				<li><a class="trn" data-target="layer/new.new_selection" href="#">Copy selection</a></li>
				<li><a class="trn" data-target="edit/paste.paste" data-key="Ctrl+V" href="#">Paste</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="edit/selection.select_all" href="#">Select all</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">Image</a>
			<ul>
				<li><a class="trn dots" data-target="image/information.information" href="#">Information</a></li>
				<li><a class="trn dots" data-target="image/size.size" href="#">Size</a></li>
				<li><a class="trn dots" data-target="image/trim.trim" data-key="T" href="#">Trim</a>
				<li class="more">
					<a class="trn" href="#">Zoom</a>
					<ul>
						<li><a class="trn" data-target="image/zoom.in" href="#">Zoom In</a></li>
						<li><a class="trn" data-target="image/zoom.out" href="#">Zoom Out</a></li>
						<li><div class="mid-line"></div></li>
						<li><a class="trn" data-target="image/zoom.original" href="#">Original size</a></li>
						<li><a class="trn" data-target="image/zoom.auto" href="#">Fit window</a></li>
					</ul>
				</li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/resize.resize" href="#">Resize</a></li>
				<li><a class="trn dots" data-target="image/rotate.rotate" href="#">Rotate</a></li>
				<li class="more">
					<a class="trn" href="#">Flip</a>
					<ul>
						<li><a class="trn" data-target="image/flip.vertical" href="#">Vertical</a></li>
						<li><a class="trn" data-target="image/flip.horizontal" href="#">Horizontal</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="image/translate.translate" href="#">Translate</a></li>
				<li><a class="trn dots" data-target="image/opacity.opacity" href="#">Opacity</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/color_corrections.color_corrections" href="#">Color corrections</a></li>
				<li><a class="trn" data-target="image/auto_adjust.auto_adjust" href="#">Auto adjust colors</a></li>
				<li><a class="trn" data-target="image/decrease_colors.decrease_colors" href="#">Decrease color depth</a></li>
				<li><a class="trn dots" data-target="image/palette.palette" href="#">Color palette</a></li>
				<li><a class="trn dots" data-target="image/grid.grid" data-key="G" href="#">Grid</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/histogram.histogram" data-key="H" href="#">Histogram</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">Layers</a>
			<ul>
				<li><a class="trn" data-target="layer/new.new" data-key="N" href="#">New</a></li>
				<li><a class="trn" data-target="layer/new.new_selection" href="#">New from selection</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="layer/duplicate.duplicate" href="#">Duplicate</a></li>
				<li><a class="trn" data-target="layer/visibility.toggle" href="#">Show / Hide</a></li>
				<li><a class="trn" data-target="layer/delete.delete" href="#">Delete</a></li>
				<li><a class="trn" data-target="layer/raster.raster" href="#">Convert to raster</a></li>
				<li><div class="mid-line"></div></li>
				<li class="more">
					<a class="trn" href="#">Move</a>
					<ul>
						<li><a class="trn" data-target="layer/move.up" href="#">Up</a></li>
						<li><a class="trn" data-target="layer/move.down" href="#">Down</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="layer/composition.composition" href="#">Composition</a></li>
				<li><a class="trn dots" data-target="layer/rename.rename" href="#">Rename</a></li>
				<li><a class="trn" data-target="layer/clear.clear" href="#">Clear</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="layer/differences.differences" href="#">Differences Down</a></li>
				<li><a class="trn" data-target="layer/merge.merge" href="#">Merge Down</a></li>
				<li><a class="trn" data-target="layer/flatten.flatten" href="#">Flatten Image</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">Effects</a>
			<ul id="effects_list">
				<li><a class="trn" data-target="effects/pixelate.pixelate" href="#">Pixelate</a>
			</ul>
		</li>
	</ul>
`;

export default menu_template;
